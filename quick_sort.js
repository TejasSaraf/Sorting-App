// QUICK SORT

async function Partition(l, r, d) {
    let i = l - 1;
    let j = l;
    let id = array[r].split('id="')[1].split('"')[0];
    document.getElementById(id).style.backgroundColor = "rgb(5, 136, 252)";
    for (j = l; j < r; j++) {
        let a = parseInt(array[j].split(/[:%]/)[1]);
        let b = parseInt(array[r].split(/[:%]/)[1]);
        if (a < b) {
            i++;
            let curr_id = array[i].split('id="')[1].split('"')[0];
            let nxt_ele = array[j].split('id="')[1].split('"')[0];
            document.getElementById(curr_id).style.backgroundColor = "green";
            document.getElementById(nxt_ele).style.backgroundColor = "green";

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            await Sleep(d / 3.0);
            container.innerHTML = array.join('');
            document.getElementById(curr_id).style.backgroundColor = "green";
            document.getElementById(nxt_ele).style.backgroundColor = "green";
            document.getElementById(id).style.backgroundColor = "rgb(5, 136, 252)";

            await Sleep(d / 3.0)
            document.getElementById(curr_id).style.backgroundColor = "orange";
            document.getElementById(nxt_ele).style.backgroundColor = "orange";
        }
    }

    let temp = array[i + 1];
    array[i + 1] = array[r];
    array[r] = temp;

    container.innerHTML = array.join(' ');
    document.getElementById(id).style.backgroundColor = "rgb(5, 136, 252)";
    await Sleep(d / 3.0);
    document.getElementById(id).style.backgroundColor = "green";
    return i + 1;
}


async function quickSort(l, r, d) {
    if (l < r) {
        let p = await Partition(l, r, d);
        await quickSort(l, p - 1, d);
        await quickSort(p + 1, r, d);
    }
}


async function QuickSort() {
    let delay = disable_buttons();
    await quickSort(0, array.length - 1, delay);
    enable_buttons();
}

// MERGE SORT

function Slide_down(l, r) {
    let temp = array[r];
    for (let i = r - 1; i >= l; i--) {
        array[i + 1] = array[i];
    }
    array[l] = temp;
}


async function merge(l, m, r, d) {
    let y = l;
    let i = l;
    let j = m + 1;

    while (i < j && j <= r) {
        let curr_id = array[j].split('id="')[1].split('"')[0];
        let nxt_ele = array[i].split('id="')[1].split('"')[0];
        document.getElementById(curr_id).style.backgroundColor = "rgb(5, 136, 252)";
        document.getElementById(nxt_ele).style.backgroundColor = "green";
        let a = parseInt(array[j].split(/[:%]/)[1]);
        let b = parseInt(array[i].split(/[:%]/)[1]);

        if (a > b) {
            i++;
        }
        else {
            Slide_down(i, j);
            i++;
            j++;
        }
        await Sleep(d / 2.0);
        container.innerHTML = array.join('');
        document.getElementById(curr_id).style.backgroundColor = "rgb(5, 136, 252)";
        document.getElementById(nxt_ele).style.backgroundColor = "green";

    }
}


async function mergeSort(l, r, d) {
    if (l < r) {
        let m = parseInt(l + (r - l) / 2);
        await mergeSort(l, m, d);
        await mergeSort(m + 1, r, d);
        await merge(l, m, r, d);
    }
}


async function MergeSort() {
    let delay = disable_buttons();
    await mergeSort(0, array.length - 1, delay);
    enable_buttons();
}
// SELECTION SORT

async function SelectionSort() {
    let delay = disable_buttons();

    let container = document.getElementById("container");
    for (let i = 0; i < array.length; i++) {
        let mn_ind = i;
        let curr_id = array[i].split('id="')[1].split('"')[0];
        document.getElementById(curr_id).style.backgroundColor = "green";
        for (let j = i + 1; j < array.length; j++) {
            let nxt_ele = array[j].split('id="')[1].split('"')[0];
            document.getElementById(nxt_ele).style.backgroundColor = "rgb(5, 136, 252)";
            let a = parseInt(array[mn_ind].split(/[:%]/)[1]);
            let b = parseInt(array[j].split(/[:%]/)[1]);
            if (a > b) mn_ind = j;
            await Sleep(delay / 5.0);
            document.getElementById(nxt_ele).style.backgroundColor = "rgb(5, 136, 252)";
        }

        let nxt_ele = array[mn_ind].split('id="')[1].split('"')[0];
        document.getElementById(nxt_ele).style.backgroundColor = "orange";
        await Sleep(2 * delay / 5.0);

        let temp = array[mn_ind];
        array[mn_ind] = array[i];
        array[i] = temp;

        container.innerHTML = array.join('');
    }
    enable_buttons();
}
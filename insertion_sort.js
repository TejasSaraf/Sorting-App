// INSERTION SORT

async function InsertionSort() {
    let delay = disable_buttons();
    let container = document.getElementById("container");
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i];
        let curr_id = key.split('id="')[1].split('"')[0];
        let nxt_ele = array[j].split('id="')[1].split('"')[0];
        document.getElementById(curr_id).style.backgroundColor = "rgb(5, 136, 252)";
        while (j >= 0 && parseInt(array[j].split(/[:%]/)[1]) > parseInt(key.split(/[:%]/)[1])) {
            document.getElementById(nxt_ele).style.backgroundColor = "orange";
            nxt_ele = array[j].split('id="')[1].split('"')[0];
            document.getElementById(nxt_ele).style.backgroundColor = "green";
            await Sleep(delay);
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
        container.innerHTML = array.join('');

    }
    enable_buttons();
}
// BUBBLE SORT
async function BubbleSort() {
    let delay = disable_buttons();
    let container = document.getElementById("container");

    for (let i = 0; i < array.length - 1; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {
            let curr_id = array[j].split(`id="`)[1].split(`"`)[0];
            let nxt_ele = array[j + 1].split(`id="`)[1].split(`"`)[0];

            document.getElementById(curr_id).style.backgroundColor = "yellow";
            document.getElementById(nxt_ele).style.backgroundColor = "green";
            await Sleep(delay / 2);
            let a = parseInt(array[j].split(/[:%]/)[1]);
            let b = parseInt(array[j + 1].split(/[:%]/)[1]);
            if (a > b) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                container.innerHTML = array.join('');
            }
            document.getElementById(curr_id).style.backgroundColor = "yellow";
            document.getElementById(nxt_ele).style.backgroundColor = "green";
        }

    }
    enable_buttons();
}
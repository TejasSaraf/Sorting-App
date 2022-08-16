
// HEAP SORT

async function Heapfiy(n, i, d) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let curr_id = array[i].split('id="')[1].split('"')[0];
    let nxt_ele;
    let id3;

    document.getElementById(curr_id).style.backgroundColor = "rgb(5, 136, 252)";
    if (right < n) {
        id3 = array[right].split('id="')[1].split('"')[0];
        document.getElementById(id3).style.backgroundColor = "green";
    }
    if (left < n) {
        nxt_ele = array[left].split('id="')[1].split('"')[0];
        document.getElementById(nxt_ele).style.backgroundColor = "green";
    }
    await Sleep(d / 3.0)
    if (left < n && parseInt(array[left].split(/[:%]/)[1]) > parseInt(array[largest].split(/[:%]/)[1]))
        largest = left;
    if (right < n && parseInt(array[right].split(/[:%]/)[1]) > parseInt(array[largest].split(/[:%]/)[1]))
        largest = right;

    if (largest != i) {
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        container.innerHTML = array.join(' ');
        document.getElementById(curr_id).style.backgroundColor = "yellow";

        if (right < n) document.getElementById(id3).style.backgroundColor = "orange";
        if (left < n) document.getElementById(nxt_ele).style.backgroundColor = "yellow";
        await Sleep(d / 3.0)
        container.innerHTML = array.join(' ');
        await Heapfiy(n, largest, d);
    }
    container.innerHTML = array.join(' ');
}


async function HeapSort() {
    let delay = disable_buttons();
    let n = array.length;
    for (let i = n / 2 - 1; i >= 0; i--)
        await Heapfiy(n, i, delay);

    for (let i = n - 1; i >= 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        container.innerHTML = array.join(' ');
        await Heapfiy(i, 0, delay);
    }
    enable_buttons();
} 
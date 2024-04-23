

function addEventInParent() {
    const parentBox = document.getElementById('parentBox');
    parentBox?.addEventListener('click', (e) => {
        console.log(e)
    }, false)
}

function addEventInChildBox() {
    const childBox = document.getElementById('childBox');
    childBox?.addEventListener('click', (e) => {
        console.log(e)
    }, false)
}
export function testEvent() {
    addEventInChildBox();
    addEventInParent()
}


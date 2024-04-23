
export function addCircle( event: PointerEvent) {

    if(!canAddCircle(2)) {
        isCircleIntersecting()
        removeCircle();
    }

    const x = event.clientX;
    const y = event.clientY;

    const radius = getRandomRadius();
    const circleElement = drawCircle(radius);
    circleElement.style.top = (y - radius/2).toString() + 'px'
    circleElement.style.left = (x - radius/2).toString() + 'px'
    
    document.body.appendChild(circleElement)
}

function drawCircle(radius: number): HTMLElement {
    const element = document.createElement('div');
    element.style.display = 'block'
    element.style.width = radius + 'px'
    element.style.height = radius + 'px'
    element.style.borderRadius = '50% '
    element.style.borderColor = 'red'
    element.style.borderWidth = '2px'
    element.style.backgroundColor = 'green'
    element.style.position = 'absolute'
    element.classList.add('circle')
    return element
}

function getRandomRadius() {
    let min = 0;
    let max = 100;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive    
}

function removeCircle() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        document.body.removeChild(circle)
    })
}

function canAddCircle(allowedNumber: number): boolean {
    const numberOfCirclesPresent = document.getElementsByClassName('circle').length;
    return allowedNumber > numberOfCirclesPresent;
}

function isCircleIntersecting() {
    debugger
   let circles = document.getElementsByClassName('circle');
   let circle1X = circles[0].getClientRects().item(0).x;
   let circle1Y = circles[0].getClientRects().item(0).y;
   let circle1Radius = circles[0].getClientRects().item(0).width;

   let circle2X = circles[1].getClientRects().item(0).x;
   let circle2Y = circles[1].getClientRects().item(0).y;

   let circleXRadius = {
    front: circle1X + circle1Radius,
    back: circle1X - circle1Radius,
   }

   let circleYRadius = {
    front: circle1Y + circle1Radius,
    back: circle1Y- circle1Radius,
   }

//    if((circleXRadius.front > circle2X) || (circleXRadius.front > circle2X))

}
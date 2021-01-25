// @ts-nocheck
export class EventUtils {
  static listen(tag, type) {
    const findX = (element) => {
      if (!element) {
        return 0;
      }

      return element.x + findX(element.parent);
    };

    const findY = (element) => {
      if (!element) {
        return 0;
      }

      return element.y + findY(element.parent);
    };
    
    const isNode = (node, event) => {
      let initialX = findX(node);
      let initialY = findY(node);

      if (
        event.pageX >= initialX &&
        node.finalW + initialX >= event.pageX &&
        event.pageY >= initialY &&
        node.finalH + initialY >= event.pageY
      ) {
        if (node.ref) {
          console.log(`${node.ref} was clicked. Good job`);
        } else {
          console.log(`This was clicked. Good job`);
        }

        return true;
      }

      return false;
    }


    const findElement = (element, event) => {
      if (isNode(element, event)) {
        return element;
      } else {
        if (element) {
          element.children.forEach((child) => {
            const found = findElement(child, event);
            if (found) {
              return found;
            }
          });
        }
      }
      return null;
    };

    const handler = (event) => {
      const element = findElement(tag, event);
      console.log(element);
    };

    switch(type) {
      case 'click':
        window.onclick = handler;
        break;
      case 'mousedown':
        window.onmousedown = handler;
        break;
      case 'onmouseup':
        window.onmouseup = handler;
        break;
      case 'mousemove':
        window.onmousemove = handler;
        break;
    }
  }

  static getBoundingClientRect(tag) {}
}

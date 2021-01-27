export class EventUtils {
  static findX(element) {
    if (!element) {
      return 0;
    }

    return element.x + this.findX(element.parent);
  }

  static findY(element) {
    if (!element) {
      return 0;
    }

    return element.y + this.findY(element.parent);
  }

  static listen(tag, type, callback) {
    const isNode = (node, event) => {
      let initialX = this.findX(node);
      let initialY = this.findY(node);

      if (
        event.pageX >= initialX &&
        node.finalW + initialX >= event.pageX &&
        event.pageY >= initialY &&
        node.finalH + initialY >= event.pageY
      ) {
        return true;
      }

      return false;
    }


    const searchElement = (element, event) => {
      if (isNode(element, event)) {
        return element;
      } 
      
      if (element.children) {
        for(const child of element.children) {
          const res = searchElement(child, event);
          if (res) {
            return res;
          }
        }
      }
    };

    const handler = (event) => {
      const element = searchElement(tag, event);
      callback(element, event);
    };

    switch(type) {
      case 'click':
        window.onclick = handler;
        break;
      case 'mousedown':
        window.onmousedown = handler;
        break;
      case 'mouseup':
        window.onmouseup = handler;
        break;
      case 'mousemove':
        window.onmousemove = handler;
        break;
    }
  }

  static getBoundingClientRect(tag) {
    const x = this.findX(tag);
    const y = this.findY(tag);
    return {x, y};
  }
}

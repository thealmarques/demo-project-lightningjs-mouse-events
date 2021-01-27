export class MouseEvents {
  static findXPos(element) {
    if (!element) {
      return 0;
    }

    return element.x + this.findXPos(element.parent);
  }

  static findYPos(element) {
    if (!element) {
      return 0;
    }

    return element.y + this.findYPos(element.parent);
  }

  static listen(tag, type, callback) {
    const isIn = (node, event) => {
      let initialX = this.findXPos(node);
      let initialY = this.findYPos(node);

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
      if (isIn(element, event)) {
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

    window.addEventListener(type, handler);
  }

  static getBoundingClientRect(tag) {
    const x = this.findXPos(tag);
    const y = this.findYPos(tag);
    return {x, y};
  }
}

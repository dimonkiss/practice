class CssClass {
    constructor(className) {
      this.className = className;
      this.styles = [];
    }
  
    setStyle(property, value) {
      this.styles.push({ property, value });
    }
  
    removeStyle(property) {
      this.styles = this.styles.filter((style) => style.property !== property);
    }
  
    getCss() {
      let css = `.${this.className} {\n`;
  
      for (const style of this.styles) {
        css += `  ${style.property}: ${style.value};\n`;
      }
  
      css += "}\n";
  
      return css;
    }
  }
  
 
  const myClass = new CssClass("my-class");
  myClass.setStyle("color", "red");
  myClass.setStyle("font-size", "16px");
  myClass.setStyle("background-color", "yellow");
  
  
  myClass.removeStyle("font-size");
  
  
  const cssCode = myClass.getCss();
  console.log(cssCode);
  
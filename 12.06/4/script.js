class HtmlBlock {
    constructor() {
      this.styles = [];
      this.rootElement = new HtmlElement("div");
    }
  
    addStyle(cssClass) {
      this.styles.push(cssClass);
    }
  
    getCode() {
      let htmlCode = "<style>\n";
      
      for (const style of this.styles) {
        htmlCode += style.getCss();
      }
      
      htmlCode += "</style>\n";
      htmlCode += this.rootElement.getHtml();
  
      return htmlCode;
    }
  }
  
  class HtmlElement {
    constructor(tag) {
      this.tag = tag;
      this.attributes = [];
      this.styles = [];
      this.text = "";
      this.children = [];
    }
  
    setAttribute(name, value) {
      this.attributes.push({ name, value });
    }
  
    setStyle(property, value) {
      this.styles.push({ property, value });
    }
  
    setText(text) {
      this.text = text;
    }
  
    addChild(element) {
      this.children.push(element);
    }
  
    getHtml() {
      let html = `<${this.tag}`;
      
      for (const attribute of this.attributes) {
        html += ` ${attribute.name}="${attribute.value}"`;
      }
      
      if (this.styles.length > 0) {
        html += ' style="';
        for (const style of this.styles) {
          html += `${style.property}: ${style.value}; `;
        }
        html += '"';
      }
      
      html += ">\n";
      
      if (this.text !== "") {
        html += this.text;
      }
      
      for (const child of this.children) {
        html += child.getHtml();
      }
      
      html += `</${this.tag}>\n`;
  
      return html;
    }
  }
  
  
  const htmlBlock = new HtmlBlock();
  
  
  const wrapClass = new CssClass("wrap");
  wrapClass.setStyle("display", "flex");
  
  
  const blockClass = new CssClass("block");
  blockClass.setStyle("width", "300px");
  blockClass.setStyle("margin", "10px");
  
 
  htmlBlock.addStyle(wrapClass);
  htmlBlock.addStyle(blockClass);
  
 
  const wrapperDiv = new HtmlElement("div");
  wrapperDiv.setAttribute("id", "wrapper");
  wrapperDiv.addAttribute("class", "wrap");
  
  
  const firstBlockDiv = new HtmlElement("div");
  firstBlockDiv.addAttribute("class", "block");
  const firstBlockHeading = new HtmlElement("h3");
  firstBlockHeading.setText("What is Lorem Ipsum?");
  const firstBlockImage = new HtmlElement("img");
  firstBlockImage.addAttribute("class", "img");
  firstBlockImage.setAttribute("src", "lipsum.jpg");
  firstBlockImage.setAttribute("alt", "Lorem Ipsum");
  const firstBlockParagraph = new HtmlElement("p");
  firstBlockParagraph.addAttribute("class", "text");
  firstBlockParagraph.setText(`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <a href="https://www.lipsum.com/" target="_blank">More...</a>"`);
  firstBlockDiv.addChild(firstBlockHeading);
  firstBlockDiv.addChild(firstBlockImage);
  firstBlockDiv.addChild(firstBlockParagraph);
  
  const secondBlockDiv = new HtmlElement("div");
  secondBlockDiv.addAttribute("class", "block");
  const secondBlockHeading = new HtmlElement("h3");
  secondBlockHeading.setText("What is Lorem Ipsum?");
  const secondBlockImage = new HtmlElement("img");
  secondBlockImage.addAttribute("class", "img");
  secondBlockImage.setAttribute("src", "lipsum.jpg");
  secondBlockImage.setAttribute("alt", "Lorem Ipsum");
  const secondBlockParagraph = new HtmlElement("p");
  secondBlockParagraph.addAttribute("class", "text");
  secondBlockParagraph.setText(`"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <a href="https://www.lipsum.com/" target="_blank">More...</a>"`);
  secondBlockDiv.addChild(secondBlockHeading);
  secondBlockDiv.addChild(secondBlockImage);
  secondBlockDiv.addChild(secondBlockParagraph);
  
  wrapperDiv.addChild(firstBlockDiv);
  wrapperDiv.addChild(secondBlockDiv);
  
  htmlBlock.rootElement = wrapperDiv;
  
  
  const htmlCode = htmlBlock.getCode();
  document.write(htmlCode);
  
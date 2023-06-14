class HtmlElement {
    constructor(tagName, selfClosing = false) {
      this.tagName = tagName;
      this.selfClosing = selfClosing;
      this.textContent = "";
      this.attributes = [];
      this.styles = [];
      this.children = [];
    }
  
    setAttribute(name, value) {
      this.attributes.push({ name, value });
    }
  
    setStyle(property, value) {
      this.styles.push({ property, value });
    }
  
    appendChild(element) {
      this.children.push(element);
    }
  
    prependChild(element) {
      this.children.unshift(element);
    }
  
    getHtml() {
      let html = `<${this.tagName}`;
  
   
      for (const attribute of this.attributes) {
        html += ` ${attribute.name}="${attribute.value}"`;
      }
  
      
      if (this.styles.length > 0) {
        const styleString = this.styles
          .map(({ property, value }) => `${property}: ${value};`)
          .join(" ");
        html += ` style="${styleString}"`;
      }
  
      html += ">";
  
      html += this.textContent;
  
     
      for (const child of this.children) {
        html += child.getHtml();
      }
  
      if (!this.selfClosing) {
        html += `</${this.tagName}>`;
      }
  
      return html;
    }
  }
  
 
  const wrapperDiv = new HtmlElement("div");
  wrapperDiv.setAttribute("id", "Wrapper");
  wrapperDiv.setStyle("display", "flex");
  
  const firstInnerDiv = new HtmlElement("div");
  firstInnerDiv.setStyle("width", "300px");
  firstInnerDiv.setStyle("margin", "10px");
  
  const firstHeading = new HtmlElement("h3");
  firstHeading.textContent = "What is Lorem Ipsum?";
  
  const firstImage = new HtmlElement("img", true);
  firstImage.setAttribute("style", "width: 100%");
  firstImage.setAttribute("src", "lipsum.jpg");
  firstImage.setAttribute("alt", "Lorem Ipsum");
  
  const firstParagraph = new HtmlElement("p");
  firstParagraph.setStyle("text-align", "justify");
  firstParagraph.textContent =
    '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  const firstLink = new HtmlElement("a");
  firstLink.setAttribute("href", "https://www.lipsum.com/");
  firstLink.setAttribute("target", "_blank");
  firstLink.textContent = "More...";
  
  firstParagraph.appendChild(firstLink);
  firstInnerDiv.appendChild(firstHeading);
  firstInnerDiv.appendChild(firstImage);
  firstInnerDiv.appendChild(firstParagraph);
  
  const secondInnerDiv = new HtmlElement("div");
  secondInnerDiv.setStyle("width", "300px");
  secondInnerDiv.setStyle("margin", "10px");
  
  const secondHeading = new HtmlElement("h3");
  secondHeading.textContent = "What is Lorem Ipsum?";
  
  const secondImage = new HtmlElement("img", true);
  secondImage.setAttribute("style", "width: 100%");
  secondImage.setAttribute("src", "lipsum-jeg");
  secondImage.setAttribute("alt", "Lorem Ipsum");
  
  const secondParagraph = new HtmlElement("p");
  secondParagraph.setStyle("text-align", "justify");
  secondParagraph.textContent =
    '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."';
  const secondLink = new HtmlElement("a");
  secondLink.setAttribute("href", "https://www.lipsum.com/");
  secondLink.setAttribute("target", "_blank");
  secondLink.textContent = "More...";
  
  secondParagraph.appendChild(secondLink);
  secondInnerDiv.appendChild(secondHeading);
  secondInnerDiv.appendChild(secondImage);
  secondInnerDiv.appendChild(secondParagraph);
  
  wrapperDiv.appendChild(firstInnerDiv);
  wrapperDiv.appendChild(secondInnerDiv);
  
  
  document.write(wrapperDiv.getHtml());
  
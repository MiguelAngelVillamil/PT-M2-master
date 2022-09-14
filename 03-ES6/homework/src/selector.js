var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ

  var resultSet = [];
  
  // Condición de corte:
  // Guardamos el match en nuestro array de elementos.
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // Recorremos los hijos de nuestro elemento (etiqueta) actual.
  for (let c = 0; c < startEl.children.length; c++) {

    // Cada elemento tiene un array de hijos con el cuál accedemos desde .children
    // Para guardar todos los elementos del arbol tenemos que concatenarle a nuestro array final lo que ya tiene con todos los hijos del elemento en el cuál estemos parados y así sucesivamente, o mejor dicho recursivamente.
    resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, startEl.children[c])]
  }

  return resultSet;
};

var selectorTypeMatcher = function(selector) {
  // Detecta y devuelve el tipo de selector
  // devuelve uno de estos tipos: id, class, tag.class, tag
  // tu código aquí

  switch (selector[0]) {

    case "#":
      return "id";
  
    case ".":
      return "class";

    default:
      return selector.split(".").length > 1 ? "tag.class" : "tag";
  }
};

var matchFunctionMaker = function(selector) {
  // NOTA SOBRE LA FUNCIÓN MATCH
  // recuerda, la función matchFunction devuelta toma un elemento como un
  // parametro y devuelve true/false dependiendo si el elemento
  // matchea el selector.

  // Utilizamos la función anterior como punto de comparación.
  var selectorType = selectorTypeMatcher(selector);

  // En caso de que nos pasen una ID: <div id="id1"></div>
  if (selectorType === "id") {
    return elemento => "#" + elemento.id === selector; // "#" + "id1" === "#id1"
  }
  
  // En caso de que nos pasen una Class: <div class="clase1 clase2"></div>
  if (selectorType === "class") {
    return elemento => {
      let classes = elemento.classList; // ["clase1", "clase2"]
      
      for (let i = 0; i < classes.length; i++) {
        if("." + classes[i] === selector) { // "." + "clase1" === ".clase1"
          return true;
        } 
      }
      return false;
    }
  }
  
  // En caso de que nos pasen una Tag: <div></div>
  if (selectorType === "tag") {
    return elemento => elemento.tagName === selector.toUpperCase(); // "DIV" === "DIV"
  }

  // En caso de que nos pasen una Tag con una clase:
  if (selectorType === "tag.class") {
    return elemento => {
      let [tagOwn, classOwn] = selector.split(".");

      return matchFunctionMaker(tagOwn)(elemento) && matchFunctionMaker("." + classOwn)(elemento);
    }
  }
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};



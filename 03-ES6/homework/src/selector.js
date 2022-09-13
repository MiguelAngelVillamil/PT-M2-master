var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  // Condición de corte:
  // Guardamos el match en nuestro array de elementos.
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let c = 0; c < startEl.children.length; c++) {

    // Cada Elemento tiene un array de hijos con el cuál accedemos desde .children
    // Para guardar todos los elementos del arbol tenemos que a nuestro array final concatenarle lo que ya tiene con todos los hijos del elemento en el cuál estemos parados y así sucesivamente, o mejor dicho recursivamente.
    resultSet = [...resultSet, traverseDomAndCollectElements(matchFunc, startEl.children[c])]
  }


  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
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

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {

  var selectorType = selectorTypeMatcher(selector);
  
  if (selectorType === "id") { // <div id="id1"></div>
    return elemento => "#" + elemento.id === selector; // "#" + "id1" === "#id1"

  } else if (selectorType === "class") { // <div class="clase1 clase2"></div>
    return elemento => {

      let classes = elemento.classList; // ["clase1", "clase2"]
      
      for (let i = 0; i < classes.length; i++) {
        if("." + classes[i] === selector) return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag.class") { // <div class="clase1"></div> // div.clase1
    return elemento => {
      let [tagOwn, classOwn] = selector.split(".");

      return matchFunctionMaker(tagOwn)(elemento) && matchFunctionMaker("." + classOwn)(elemento);
    }
    
  } else if (selectorType === "tag") {
    return elemento => elemento.tagName === selector.toUpperCase();
    
  }
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

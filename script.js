/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

 const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };

  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    
    console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
    alert(`This is your total after the tip: ${formatter(locale, currency, total)}`);
  };
 

  document.getElementById("myBtn").onclick = function() { 
    let amount = document.getElementById("amount").value;
    let tipPercent = document.getElementById("tipPercent").value;
    
    var skillsSelect = document.getElementById("select");
    var skillsValue = document.getElementById("select").value;
    var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;

    tipCalculator(amount, tipPercent, skillsValue, selectedText);
  };
 
//lingo.net iso code language table, putting in the new country will overwrite the default for the US
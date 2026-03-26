let phrases = ["developer.", "designer.", "I build things that matter."];
let current = 0;
let typingEl = document.getElementById("typing");
function type() {
  let text = phrases[current]
  let i = 0
  let interval = setInterval(function() {
  typingEl.textContent = text.slice(0, i);
  i++; 
if (i > text.length) {
    clearInterval(interval);
    setTimeout(function() {
    current++;
   if (current >= phrases.length) {
    current = 0;
   }
   type()
  },1100)
  }
  
  
}, 150)
}
type()



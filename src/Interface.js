document.addEventListener('DOMContentLoaded', () => {

  function updateTimeLine () {
    async function result() {
      const result = await Peep.all();
      console.log(result);
      let str = '<ul>'
      result.slice(0, 20).forEach(function(peep) {
        str += '<li>'+ peep.body + '</li>';
        });  
        str += '</ul>';
        document.querySelector("#timeline").innerHTML = str;
    }
    result();
  };
  console.log("ere")
  updateTimeLine();

  document.querySelector("#addPeep").addEventListener("click", () => {
    async function result() {
      const peepText = document.getElementById("peepText").value;
      await Peep.addPeep(peepText);
      document.getElementById("peepText").value = "";
      updateTimeLine();
    }
    result();  
  });
});

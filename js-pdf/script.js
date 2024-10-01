 const btnGenerate = document.querySelector("#generate-pdf");

 btnGenerate.addEventListener("click", () => {
    //conteudo pdf
    const content = document.querySelector("#content")

    //configuração do arquivo final de pdf
    const options = { 
        margin: [10, 10, 10, 10],
        filename: "vale-transporte",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orietation: "portrait"}
    }

    //baixar o pdf
    html2pdf().set(options).from(content).save(); //aq seleciona oq vc quer colocar no pdf
    
 })


 
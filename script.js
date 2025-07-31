const form = document.getElementById("formulario");
const modal = document.createElement("div");


form.addEventListener("submit", function (event)
{
    event.preventDefault();
    exibirPopup();
    
});

function exibirPopup()
{
    form.style.display = "none";
    modal.classList.add("popup");
    modal.innerHTML = '<h1>Formulário enviado com sucesso!</h1><button onclick="closePopup()">Fechar</button>';
    document.body.appendChild(modal);

    modal.style.cssText = 'width: 20%; transform: translate(-50, -50); border: 2px solid #000; border-radius: 10px; background-color: #6703AE; margin-top: 20px; margin-left: 39%; z-index: 1000;';
    
    
}


function closePopup()
{
    modal.remove();
    window.location.reload();
}
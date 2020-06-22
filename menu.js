const template = document.createElement('template')
template.innerHTML = `
<style>
.menu{
    display:flex
}
</style>
   <div class="menu">
       <ul><span class="item">Contactos</span></ul>
       <ul><span>Jesús Rebollar</span></ul>
       <ul><span class="item">Proyectos</span></ul>
       <ul></ul>
   </div>

`;

class Menu extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}
window.customElements.define('my-menu', Menu)

let isNavChanged = document.documentElement.scrollTop === 0;
let navMain = document.getElementById('navMain');
let navMainOptions = document.getElementById('navMainOptions');
let formSearch = document.getElementById('formSearch');

window.addEventListener("scroll", (event) => {
  if(document.documentElement.scrollTop === 0) {
    console.log('Estás hasta arriba')
    if(isNavChanged) {
      isNavChanged = false;
      revertNavbar();
    }
  } else {
    if(!isNavChanged) {
      isNavChanged = true;
      changeNavbar();
    }
  }
}, false);

// Para que pueda disparar el evento cuando hace scroll hacia abajo
document.body.scrollTop = 10;
document.documentElement.scrollTop = 10;

document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

function changeNavbar() {
  console.log('changeNavbar')
  navMain.parentElement.classList[ 'add' ]('fixed-top');
  formSearch.innerHTML = getLoginButtonsTemplate();
  navMainOptions.innerHTML = getLogoItemTemplate() + navMainOptions.innerHTML;
}

function revertNavbar() {
  console.log('revertNavbar')
  navMain.parentElement.classList[ 'remove' ]('fixed-top')
  formSearch.innerHTML = getSearchTemplate();
  navMainOptions.removeChild(navMainOptions.firstChild);
}

function getLogoItemTemplate() {
  let template = `<li class="nav-item active
      <a class="navbar-brand text-center" href="#">
        <img src="images/marca/m.png" class="nav-sm-logo d-inline-block align-top">
      </a>
    </li>`;

  return template;
}

function getLoginButtonsTemplate() {
  let template = `
    <i class="fas fa-search text-white mr-2"></i>
    <button class="btn btn-light btn-sm text-danger my-2 my-sm-0 mr-1" type="submit">Suscríbete</button>
    <button class="btn bg-strong-danger text-white btn-sm my-2 my-sm-0" type="submit">Iniciar sesión</button>`;

  return template;
}

function getSearchTemplate() {
  let template = `
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Buscar en marca.com">
      <div class="input-group-append">
        <span class="input-group-text bg-white"><i class="fas fa-search"></i></span>
      </div>
    </div>`;

  return template;
}
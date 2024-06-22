const copy_panel = document.querySelector('.copy-tag');

function click_react()
{
    copy_panel.style.display = "flex";
    setTimeout(function() {
        copy_panel.style.display = 'none';
      }, 3000);
}
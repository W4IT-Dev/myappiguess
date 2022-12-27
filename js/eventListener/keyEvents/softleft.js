document.addEventListener('keydown', e => {
    if (e.key == 'SoftLeft') {
        if (editTime.style.display == 'block') return editTime.style.display = 'none', setSoftkey({
            left: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2.5px; left: 2px">arrow_back</i>',
            middle: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2.5px;">edit</i>',
            right: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2.1px; right: 2px">delete</i>'
        }), lastFocused.focus();
        if (session.style.display == 'block') {
            session.style.display = 'none';
            document.activeElement.blur();
            setSoftkey({
                left: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2.5px; left: 2px">settings</i>',
                middle: 'Session',
                right: '<i class="material-icons" style="font-size: 21px; color: red;position: relative; top: 2.5px; right: 2px">logout</i>'
            });
            return
        }
        if (settings.style.display == 'none') {
            settings.style.display = 'block';
            wholeSite.style.filter = 'blur(5px)';
            startKeyDiv.focus();
            setSoftkey({
                left: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2px; left: 2px">arrow_back</i>',
                middle: 'Select',
                right: '<i class="material-icons" style="font-size: 21px; position: relative; color: #44f;  top: 2px; right: 2px">question_mark</i>'
            });
            settingsOpened = true;
            return;
        }
        if (settings.style.display == 'block' && startKeyDiv.style.borderWidth !== '1px' && document.activeElement.id !== 'timerSize' && document.activeElement.id !== 'scrambleSizeInput') {
            settings.style.display = 'none';
            wholeSite.style.filter = 'none';
            document.activeElement.blur();
            searchField.value = '';
            search();
            setSoftkey({
                left: '<i class="material-icons" style="font-size: 21px; position: relative; top: 2.5px; left: 2px">settings</i>',
                middle: 'Session',
                right: '<i class="material-icons" style="font-size: 21px; color: red;position: relative; top: 2.5px; right: 2px">logout</i>'
            });
            settingsOpened = false;
        }
    }
});
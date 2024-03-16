$(document).ready(function() {
    // Validação dos campos do formulário
    $('form').submit(function(e) {
        e.preventDefault();

        let isValid = true;
        $(this).find('input, select, textarea').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                alert('Por favor, preencha todos os campos.');
                return false;
            }
        });
        // Make the preview button a permanent preview field
        $('.preview').off('click').text('Preview');
        let form = $('form');
        let previewArea = $('.preview-area');
        previewArea.empty(); // Clear the preview area
        // Iterate over each input, select, and textarea
        form.find('input, select, textarea').each(function() {
            let input = $(this);
            let label = $('label[for="' + input.attr('id') + '"]'); // Get the associated label
            // Create a new preview element and append it to the preview area
            let previewElement = $('<p></p>');
            previewElement.text(label.text() + ': ' + input.val());
            previewArea.append(previewElement);
        });
        $('.preview').click(function() {
            let form = $('form');
            let previewArea = $('.preview-area');
            previewArea.empty(); // Clear the preview area

            // Iterate over each input, select, and textarea
            form.find('input, select, textarea').each(function() {
                let input = $(this);
                let label = $('label[for="' + input.attr('id') + '"]'); // Get the associated label

                // Create a new preview element and append it to the preview area
                let previewElement = $('<p></p>');
                previewElement.text(label.text() + ': ' + input.val());
                previewArea.append(previewElement);
            });
        });

        if (isValid) {
            // Se todos os campos estiverem preenchidos, faça algo aqui
        }
    });
    document.getElementById('figure').addEventListener('change', function(e) {
        let reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview-image').src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    });

    document.getElementById('background').addEventListener('change', function(e) {
        document.getElementById('preview').style.backgroundColor = e.target.value;
    });

    document.getElementById('border').addEventListener('change', function(e) {
        document.getElementById('preview').style.border = e.target.value;
    });
    // Função para editar os campos do formulário enquanto visualiza
    $('.edit').click(function() {
        let parent = $(this).closest('div');
        parent.find('input, select, textarea').prop('disabled', false);
    });

    // Função para apagar/desabilitar campos já finalizados
    $('.delete').click(function() {
        let parent = $(this).closest('div');
        parent.find('input, select, textarea').val('').prop('disabled', true);
    });

    // Limite de número de opções
    $('select').change(function() {
        if ($(this).children('option:selected').length > 5) {
            alert('Você só pode selecionar até 5 opções.');
            return false;
        }
    });
});
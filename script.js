$(document).ready(function() {
    // Ajouter une nouvelle tâche
    $('#add-task').on('click', function() {
        var taskText = $('#new-task').val();
        if (taskText) {
            $('.tasks-list').append('<div class="task-item">' + taskText + '<button class="delete-task">Delete</button></div>');
            $('#new-task').val('');
        }
    });

    // Marquer la tâche comme terminée
    $(document).on('click', '.task-item', function() {
        $(this).toggleClass('completed');
    });

    // Supprimer la tâche
    $(document).on('click', '.delete-task', function(event) {
        event.stopPropagation();
        $(this).parent().remove();
    });
});

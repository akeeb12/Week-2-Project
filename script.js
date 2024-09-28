document.addEventListener('DOMContentLoaded', () =>
{
    const countDisplay = document.getElementById('count');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    const errorDisplay = document.getElementById('error');

    let count = 0;

    function updateCount()
    {
        countDisplay.innerText = count;
        if(count <= 0)
        {
            errorDisplay.style.visibility = 'visibility';
            decrementDutton.Disabled = true;
        }else
        {
            errorDisplay.style.visibility = 'hidden';
            decrementDutton.Disabled = false;
        }

        if(count > 0)
        {
            clearButton.style.display = 'inline-block';
        }else
        {
            clearButton.style.display = 'none';
        }
    }

    incrementButton.addEventListener('click', () =>
    {
        count++;
        updateCount();
    })

    decrementButton.addEventListener('click', () =>
    {
        if(count > 0)
        {
            count--;
            updateCount();
        }
    });

    clearButton.addEventListener('click', () =>
    {
        count = 0;
        updateCount();
    });

    updateCount();

});
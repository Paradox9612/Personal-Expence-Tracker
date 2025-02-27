let totalAmount = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
        totalAmount += expenseAmount;

        // Create expense item
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        
        // Create expense name and amount
        const expenseText = document.createElement('span');
        expenseText.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteExpense(expenseItem, expenseAmount);

        expenseItem.appendChild(expenseText);
        expenseItem.appendChild(deleteButton);

        // Add expense item to the list
        document.getElementById('expenses-list').appendChild(expenseItem);

        // Update total amount
        updateTotalAmount();

        // Clear input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert('Please enter a valid expense name and amount.');
    }
}

function deleteExpense(expenseItem, expenseAmount) {
    totalAmount -= expenseAmount;
    expenseItem.remove();
    updateTotalAmount();
}

function updateTotalAmount() {
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

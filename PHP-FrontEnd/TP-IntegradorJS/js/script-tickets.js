const pricePerTicket = 200;
var name;
var surname;
var email;
var ticketsQuantity;
var category;

function DisplayResume()
{
    name = document.getElementById('name').value;
    surname = document.getElementById('surname').value;
    email = document.getElementById('email').value;
    ticketsQuantity = document.getElementById('ticketsQuantity').value;
    category = GetCategoryName();

    if(name != "" && surname != "" && ValidateEmail(email) && ValidateNumber(ticketsQuantity) && !isNaN(ticketsQuantity) && parseInt(ticketsQuantity) > 0)
    {
        alert("Gracias " + name.toUpperCase() + " " + surname.toUpperCase() + "!!!\n" +
              "TU PEDIDO:\n" + "Tickets: " + ticketsQuantity + "    " + "Categoría: " + category +
              "\nEl resumen del pedido se enviará a la siguiente dirección de correo electrónico:\n" + email);
    }
    else
    {
        alert("NO SE PUEDE PROCESAR LA OPERACIÓN.\nVerifique los datos ingresados.");
    }
}

function ValidateEmail(email)
{
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function GetTotalPrice()
{
    var numberOfTickets = GetTicketsQuantity();
    var buyerCategory = GetCategory();

    var totalPrice = CalculatePrice(numberOfTickets, buyerCategory);

    document.getElementById('show-price').value = totalPrice;
}

function CalculatePrice(numberOfTickets, buyerCategory)
{
    var totalPrice;

    if(numberOfTickets <= 0 || isNaN(numberOfTickets))
    {
        return"Total a Pagar: $ ";
    }
    else
    {
        switch(buyerCategory)
        {
            case 0:
                totalPrice = numberOfTickets * pricePerTicket;
                return "Total a Pagar: $ " + totalPrice;
            case 1:
                totalPrice = numberOfTickets * (pricePerTicket * 0.2);
                return "Total a Pagar: $ " + totalPrice;
            case 2:
                totalPrice = numberOfTickets * (pricePerTicket * 0.5);
                return "Total a Pagar: $ " + totalPrice;
            default:
                totalPrice = numberOfTickets * (pricePerTicket * 0.85);
                return "Total a Pagar: $ " + totalPrice;
        }
    }
}

function ValidateNumber(ticketsQuantity)
{
	for(var i = 0; i < ticketsQuantity.length; i++)
	    {
            var c = ticketsQuantity.charCodeAt(i);
            if(c < 48 || c > 57)
            {
                return false;
            }
	    }
	return true;
}

function GetTicketsQuantity()
{
    ticketsQuantity = document.getElementById('ticketsQuantity').value;
    if(!ValidateNumber(ticketsQuantity))
    {
        return 0;
    }
    else
    {
        totalTickets = parseInt(ticketsQuantity);
        return totalTickets;
    }
}

function GetCategory()
{
    category = document.getElementById('category').value;
    category = parseInt(category);
    return category;
}

function GetCategoryName()
{
    category = document.getElementById('category').value;
    category = parseInt(category);

    switch(category)
    {
        case 0:
            return "ENTRADA GENERAL";
        case 1:
            return "ESTUDIANTE";
        case 2:
            return "TRAINEE";
        default:
            return "JUNIOR";
    }
}
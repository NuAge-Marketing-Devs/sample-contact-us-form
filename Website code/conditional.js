$("#ProductGroup").change(function () {
    if ($(this).val() == "Log" || $(this).val() == "Sashco") {
        $('#logHomeDiv').show();
        $('#AnnualHomeCount').attr('required', '');
        $('#TypeOfProjectDiv').show();
        $('#TypeOfProject').attr('required', '');
        $('#optDiv').show();
    } else {
        $('#logHomeDiv').hide();
        $('#AnnualHomeCount').removeAttr('required');
        $('#TypeOfProjectDiv').hide();
        $('#TypeOfProject').removeAttr('required', '');
        $('#optDiv').hide();
    }
});
$("#ProductGroup").trigger("change");

$("#Homeowner_Contractor").change(function () {
    if ($(this).val() == "DIY_Home") {
        $('#projectTypeDiv').show();
        $('#howHelpFieldGroupDiv').hide();
        $('#Help').removeAttr('required');
        $('#BestFit').removeAttr('required');
        $('#companyDiv').hide();
        $('#Company').removeAttr('required');
        $('#cartridgeVolDiv').hide();
        $('#weekly_cartridge_volume').removeAttr('required');
        $('#caseVolDiv').hide();
        $('#monthly_case_volume').removeAttr('required');
        $('#brandDiv').hide();
    } else if ($(this).val() == "Contactor_Pro") {
        $('#projectTypeDiv').show();
        $('#howHelpFieldGroupDiv').show();
        $('#Help').attr('required', '');
        $('#BestFit').attr('required', '');
        $('#companyDiv').show();
        $('#Company').attr('required', '');
        $('#cartridgeVolDiv').show();
        $('#weekly_cartridge_volume').attr('required', '');
        $('#caseVolDiv').hide();
        $('#monthly_case_volume').removeAttr('required');
        $('#brandDiv').hide();
    } else if ($(this).val() == "Dealter_Retailer") {
        $('#projectTypeDiv').show();
        $('#howHelpFieldGroupDiv').show();
        $('#Help').attr('required', '');
        $('#BestFit').attr('required', '');
        $('#companyDiv').show();
        $('#Company').attr('required', '');
        $('#cartridgeVolDiv').hide();
        $('#weekly_cartridge_volume').removeAttr('required');
        $('#caseVolDiv').show();
        $('#monthly_case_volume').attr('required', '');
        $('#brandDiv').show();
    } else {
        $('#projectTypeDiv').hide();
        $('#howHelpFieldGroupDiv').hide();
        $('#Help').removeAttr('required');
        $('#BestFit').removeAttr('required');
        $('#companyDiv').hide();
        $('#Company').removeAttr('required');
        $('#cartridgeVolDiv').hide();
        $('#weekly_cartridge_volume').removeAttr('required');
        $('#caseVolDiv').hide();
        $('#monthly_case_volume').removeAttr('required');
        $('#brandDiv').hide();
    }
});
$("#Homeowner_Contractor").trigger("change");

const form = {
    referring: document.getElementById('ProductGroup'),
    firstName: document.getElementById('FirstName'),
    lastName: document.getElementById('LastName'),
    email: document.getElementById('Email'),
    phone: document.getElementById('Phone'),
    city: document.getElementById('City'),
    state: document.getElementById('State')
};
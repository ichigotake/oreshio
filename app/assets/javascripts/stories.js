function remove_fields(link){
	$(link).prev('input[type=hidden]').val('1');
	$(link).closest('.field_inner').hide();
}
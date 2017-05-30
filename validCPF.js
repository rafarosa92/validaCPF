$("#target").keyup(function() {
	
	if ($('#target').val().length == 14) {
		
		var cpf_completo = $('#target').val();

		cpf = cpf_completo.split("");
		cpf.splice(3, 1);
		cpf.splice(6, 1);
		cpf.splice(9, 1);
		console.log(cpf);

		var digitoVerificador = 0;

		soma = ((cpf[0] * 11) + (cpf[1] * 10) + (cpf[2] * 9) + (cpf[3] * 8) + (cpf[4] * 7) + (cpf[5] * 6) + (cpf[6] * 5) + (cpf[7] * 4) + (cpf[8] * 3) + (cpf[9] * 2) + (cpf[10] * 0));

		resto = ((soma * 10) % 11);

		if (resto > 9) {

			digitoVerificador = 0;

		} else {
			if (cpf[10] == resto) {

				$('#target').addClass('valid');
			} else {
				$('#target').addClass('invalid');
			}
		}
	}else{
		$('#target').removeClass('valid');
		$('#target').removeClass('invalid');

	}
});

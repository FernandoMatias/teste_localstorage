Ext.define('Touch2Demo.view.ColetasForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.coletasform',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		itemId: 'toolbarFormColeta',
		title: 'Coleta de Pneus',
		items: [
		    {
			xtype: 'button',
			ui: 'back',
			action: 'voltarColetasList',
			text: 'Voltar'
		    }

		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'cliente',
			label: 'Clientes'
		    },
		    {
			xtype: 'textfield',
			name: 'data_entrega',
			label: 'Data da Entrega'
		    },
		    {
			xtype: 'textfield',
			name: 'observacao',
			label: 'Observação'
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'selectfield',
			label: 'Espessura',
			name: 'espessura',
			options: [
			    {text: '', value: '00'},
			    {text: '300', value: '300'},
			    {text: '295', value: '295'},
			    {text: '290', value: '290'}
			]
		    },
		    {
			xtype: 'selectfield',
			label: 'Altura',
			name: 'altura',
			options: [
			    {text: '', value: '0'},
			    {text: '1', value: '1'},
			    {text: '2', value: '2'},
			    {text: '3', value: '3'}
			]
		    },
		    {
			xtype: 'selectfield',
			label: 'Roda',
			name: 'roda',
			options: [
			    {text: '', value: '0'},
			    {text: '20', value: '20'},
			    {text: '22', value: '22'},
			    {text: '24', value: '24'}
			]
		    }
		]
	    },
	    {
		xtype: 'fieldset',
		items: [
		    {
			xtype: 'textfield',
			name: 'n_fogo',
			label: 'Nº do fogo'
		    },
		    {
			xtype: 'textfield',
			name: 'n_serie',
			label: 'Nº de serie'
		    },
		    {
			xtype: 'selectfield',
			label: 'Serviço',
			name: 'servico',
			options: [
			    {text: 'serviço 1', value: 'servico1'},
			    {text: 'serviço 2', value: 'servico2'},
			    {text: 'serviço 3', value: 'servico3'}
			]
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'action',
		text: 'Salvar'
	    },
	    {
		xtype: 'container',
		height: 10
	    },
	    {
		xtype: 'button',
		action: 'deletarColeta',
		ui: 'action',
		text: 'Deletar',
		hidden: true
	    }
	]
    }
});
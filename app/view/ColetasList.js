Ext.define('Touch2Demo.view.ColetasList',{
	extend: 'Ext.dataview.List',
	alias: 'widget.coletasList',
	config: {
		store: 'Coletas',
		itemTpl: '{cliente}',
		onItemDisclosure: true,
		items: [
			{
				docked: 'top',
				xtype : 'toolbar',
				ui    : 'light',
				title : 'Lista de Coletas',
				items : [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'button',
						action: 'novaColeta',
						text: 'Nova Coleta'
					}
				]
			}
		]
	}
});
Ext.define('Touch2Demo.store.Coletas',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Coleta',
		proxy: {
			type: 'localstorage',
			id: 'sencha-touch2-demo2'
		},
		autoLoad: true,
		autoSync: true
	}
	
});
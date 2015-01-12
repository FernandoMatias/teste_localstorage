Ext.define('Touch2Demo.store.Contato',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		proxy: {
			type: 'ajax',
			url: 'http://localhost/teste_android3/app/data/contato.xml',
			reader: {
			    type: 'xml',
			    record: 'contato',
			    rootProperty: 'data'		    
	                }
		},
		autoLoad: true,
		autoSync: true
	}	
});

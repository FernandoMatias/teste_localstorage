Ext.define('Touch2Demo.model.Contato', {
    extend: 'Ext.data.Model',
    config: {
	fields: [
	    {
		name: 'id'
	    },
	    {
		name: 'nome'
	    },
	    {
		name: 'sobrenome'
	    },
	    {
		name: 'email'
	    },
	    {
		name: 'endereco'
	    }
	]
    }

});
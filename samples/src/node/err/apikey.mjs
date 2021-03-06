/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/
import LrAuth from '../../common/lr/LrAuth.mjs'
import LrRequestor from '../../common/lr/LrRequestor.mjs'

async function mainP() {
	try {
		let response = await LrRequestor.healthP('InvalidApiKey', LrAuth.getHost())
		console.log('unexpected success:', JSON.stringify(response, null, 2))
	}
	catch (err) {
		console.log('expected error (api key is invalid):', err)
	}
}

mainP()

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
import RequestUtils from '../../common/request/RequestUtils.mjs'

let _abortHealthP = function(apiKey, delay) {
	let headers = {
		'X-API-Key': apiKey,
		'Cache-Control': 'no-cache, no-store, must-revalidate'
	}
	let options = {
		method: 'GET',
		protocol: 'http:',
		host: 'localhost',
		port: 8000,
		path: '/v2/health',
		headers
	}
	let signal = {
		onabort: () => console.log('uncaught abort')
	}
	let promise = RequestUtils.requestP(options, undefined, signal)
	setTimeout(() => {
		signal.onabort()
	}, delay)
	return promise
}

async function mainP() {
	console.log('start test...')
	try {
		let health = await _abortHealthP(LrAuth.getApiKey(), 10000)
		console.log('expecting health:', health)
	}
	catch (err) {
		console.log('unexpected error', err)
	}

	try {
		let health = await _abortHealthP(LrAuth.getApiKey(), 1000)
		console.log('unexpected health:', health)
	}
	catch (err) {
		console.log('expecting error (aborted)', err)
	}

	try {
		let health = await _abortHealthP(LrAuth.getApiKey(), 6000)
		console.log('expecting health:', health)
	}
	catch (err) {
		console.log('unexpected error', err)
	}
	console.log('test done.')
}

mainP()

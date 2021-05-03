import Web3ProviderBase from '../../src/index'
import {ProviderOptions} from '../../types'

describe('constructs a Web3Eth instance with expected properties', () => {
    let providerOptions: ProviderOptions

    beforeEach(() => {
        providerOptions = {
            providerString: 'http://127.0.0.1:8545'
        }
    })

    it('providerOptions.protectProvider = false', () => {
        const web3ProviderBase = new Web3ProviderBase(providerOptions)
        expect(web3ProviderBase).toMatchObject({
            _providerString: providerOptions.providerString
        })
    })
})
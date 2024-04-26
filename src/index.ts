import {execute} from './executor'
import {provider} from './provider'

// provider.testEvent()

const a = provider.testGeneratorFunction()
execute(() => console.log(a.next()), "OnClick")

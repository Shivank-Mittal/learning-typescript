import {execute} from './executor'
import {provider} from './provider'

provider.testEvent()

execute(provider.closure, "OnClick")


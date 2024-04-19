import {execute} from './executor'
import {provider} from './provider'

function run() { 
    provider.lengthOfLastWord('abc')
} 

execute(run, "OnClick")


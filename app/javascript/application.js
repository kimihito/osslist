require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("./channels")

import './css/tailwindcss.css';

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))
package capabilities

import (
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
)

type RegisterClientCapabilities struct {
	shared.Action
}

func (a RegisterClientCapabilities) GetName() flowpilot.ActionName {
	return shared.ActionRegisterClientCapabilities
}

func (a RegisterClientCapabilities) GetDescription() string {
	return "Send the computers capabilities."
}

func (a RegisterClientCapabilities) Initialize(c flowpilot.InitializationContext) {
	c.AddInputs(flowpilot.BooleanInput("webauthn_conditional_mediation_available").Hidden(true))
	c.AddInputs(flowpilot.BooleanInput("webauthn_available").Required(true).Hidden(true))
}

func (a RegisterClientCapabilities) Execute(c flowpilot.ExecutionContext) error {
	if valid := c.ValidateInputData(); !valid {
		return c.ContinueFlowWithError(c.GetCurrentState(), flowpilot.ErrorFormDataInvalid)
	}

	webauthnAvailable := c.Input().Get("webauthn_available").Bool()

	err := c.Stash().Set("webauthn_available", webauthnAvailable)
	if err != nil {
		return err
	}

	conditionalMediationAvailable := c.Input().Get("webauthn_conditional_mediation_available").Bool()
	err = c.Stash().Set("webauthn_conditional_mediation_available", conditionalMediationAvailable)
	if err != nil {
		return err
	}

	return c.EndSubFlow()
}

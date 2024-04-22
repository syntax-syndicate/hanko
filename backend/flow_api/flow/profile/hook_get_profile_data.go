package profile

import (
	"errors"
	"fmt"
	"github.com/teamhanko/hanko/backend/dto"
	"github.com/teamhanko/hanko/backend/flow_api/flow/shared"
	"github.com/teamhanko/hanko/backend/flowpilot"
	"github.com/teamhanko/hanko/backend/persistence/models"
)

type GetProfileData struct {
	shared.Action
}

func (h GetProfileData) Execute(c flowpilot.HookExecutionContext) error {
	userModel, ok := c.Get("session_user").(*models.User)
	if !ok {
		return errors.New("no valid session")
	}

	err := c.Payload().Set("user", dto.ProfileDataFromUserModel(userModel))
	if err != nil {
		return fmt.Errorf("failed to set user payload: %w", err)
	}

	err = c.Input().Set("username", userModel.Username)
	if err != nil {
		return fmt.Errorf("failed to set username as input value: %w", err)
	}

	return nil
}

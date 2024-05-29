package config

import "time"

func DefaultConfig() *Config {
	return &Config{
		ConvertLegacyConfig: true,
		Server: Server{
			Public: ServerSettings{
				Address: ":8000",
			},
			Admin: ServerSettings{
				Address: ":8001",
			},
		},
		Webauthn: WebauthnSettings{
			RelyingParty: RelyingParty{
				Id:          "localhost",
				DisplayName: "Hanko Authentication Service",
				Origins:     []string{"http://localhost:8888"},
			},
			UserVerification: "preferred",
			Timeout:          60000,
		},
		Smtp: SMTP{
			Port: "465",
		},
		EmailDelivery: EmailDelivery{
			Enabled: true,
			SMTP: SMTP{
				Port: "465",
			},
			FromAddress: "noreply@hanko.io",
			FromName:    "Hanko",
		},
		Passcode: Passcode{
			TTL: 300,
			Email: PasscodeEmail{
				FromAddress: "passcode@hanko.io",
				FromName:    "Hanko",
			},
			Smtp: SMTP{
				Port: "465",
			},
		},
		Password: Password{
			MinLength: 8,
		},
		Database: Database{
			Database: "hanko",
		},
		Session: Session{
			Lifespan: "1h",
			Cookie: Cookie{
				HttpOnly: true,
				SameSite: "strict",
				Secure:   true,
			},
		},
		AuditLog: AuditLog{
			ConsoleOutput: AuditLogConsole{
				Enabled:      true,
				OutputStream: OutputStreamStdOut,
			},
			Mask: true,
		},
		Emails: Emails{
			RequireVerification: true,
			MaxNumOfAddresses:   5,
		},
		RateLimiter: RateLimiter{
			Enabled: true,
			Store:   RATE_LIMITER_STORE_IN_MEMORY,
			PasswordLimits: RateLimits{
				Tokens:   5,
				Interval: 1 * time.Minute,
			},
			PasscodeLimits: RateLimits{
				Tokens:   3,
				Interval: 1 * time.Minute,
			},
			TokenLimits: RateLimits{
				Tokens:   3,
				Interval: 1 * time.Minute,
			},
		},
		Account: Account{
			AllowDeletion: false,
			AllowSignup:   true,
		},
		ThirdParty: ThirdParty{
			Providers: ThirdPartyProviders{
				Google: ThirdPartyProvider{
					DisplayName:  "Google",
					AllowLinking: true,
				},
				GitHub: ThirdPartyProvider{
					DisplayName:  "GitHub",
					AllowLinking: true,
				},
				Apple: ThirdPartyProvider{
					DisplayName:  "Apple",
					AllowLinking: true,
				},
				Discord: ThirdPartyProvider{
					DisplayName:  "Discord",
					AllowLinking: true,
				},
			},
		},
		Passkey: Passkey{
			Enabled:               true,
			Optional:              true,
			AcquireOnRegistration: "always",
			AcquireOnLogin:        "always",
			UserVerification:      "preferred",
			AttestationPreference: "direct",
			Limit:                 100,
		},
		Email: Email{
			Enabled:               true,
			Optional:              false,
			AcquireOnRegistration: true,
			AcquireOnLogin:        true,
			RequireVerification:   true,
			Limit:                 5,
			UseAsLoginIdentifier:  true,
			MaxLength:             120,
			UseForAuthentication:  true,
			PasscodeTtl:           300,
		},
		Username: Username{
			Enabled:               true,
			Optional:              true,
			AcquireOnRegistration: true,
			AcquireOnLogin:        true,
			UseAsLoginIdentifier:  false,
			MinLength:             3,
			MaxLength:             40,
		},
	}
}

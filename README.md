# Challenge

Wanna join the bestest most amazingest team at DICE? WHO DOESN'T?! Gotta do this challenge first tho.

Using [Node.js](https://nodejs.org) complete the tasks below. Use any module you deem necessary. You will totally maybe 
be judged on your use of tabs v spaces or spaces v tabs. Once completed, please push it to your personal Github account. 
You totally wanna update your README jawn, just in case there are special instructions to git'er going.

Gritty always knows which editor you're using. You've been warned. `:w` `:q` `:q`

xoxo May The Grit Be With You

![image](https://thumbs.gfycat.com/RewardingBlushingBuck-size_restricted.gif)

## Tasks

1. Build an API with the following two routes
    * GET route: Get a single device based on `id`. The data is structured such that a device can have an associated 
    module. The modules array will contain an object of id and type if a device has such a module. When returning the
    parent device, modules should be an object with a key being the module type and the value the modules object. Example 
    below.
    * GET route: Get all devices based on `type`, again updating device configurations with the appropriate 
    module object, if present.
1. Bonus Level: Write some tests for your API, even one would be nice to see, but not required.

### Device json example

Raw json for a device:
```json
{
	"id": "ABCXXX",
	"location": {
		"building": "Main",
		"campus": "Methodist",
		"floor": "3",
		"hospital": "Thomas Jefferson University Hospital",
		"room": "123",
		"unit": "Fake Unit"
	},
	"modules": [{
		"type": "nacelle",
		"id": "ABCYYY"
	}],
	"type": "warpdrive"
}

```

Combined device object
```json

{
	"id": "ABCXXX",
	"location": {
		"building": "Main",
		"campus": "Methodist",
		"floor": "3",
		"hospital": "Thomas Jefferson University Hospital",
		"room": "123",
		"unit": "Fake Unit"
	},
	"modules": {
		"nacelle": {
			"location": {
				"unit": "Fake Unit",
				"floor": "3",
				"hospital": "Methodist Hospital",
				"campus": "Methodist",
				"building": "Main",
				"room": "123"
			},
			"lastHeartbeat": "2019-02-26T20:12:50.240Z",
			"id": "ABCYYY",
			"deviceMeta": {
				"temperature": 54.23,
				"git_describe": "1.0.0"
			},
			"lastUpdate": "2019-02-26T20:12:50.240Z",
			"type": "nacelle"
		}
	},
	"type": "warpdrive"
}

```
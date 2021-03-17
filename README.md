# Documentation

# Vender Machine Server

## Health check endpoint

Check server status.

### API

`**GET /healthcheck**`

success response: 

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

---

## User endpoint

For create, read, update and delete user(s).

### API

`**GET /user` Get all user**

success response:

```json
// status code: 200
{
	"status": "ok",
	"user": [
		{
			"username": "tester",
			"fullname": "Lorem Ipsum"
		}
		...
	]
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "ok",
	"user": []
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**GET /user/:username` Get a user**

params:

- (REQUIRED)  `username` - Specific username for searching

request example:

```json
/user/test
```

success response:

```json
// status code: 200
{
	"status": "ok",
	"user": {
		"username": "tester",
		"fullname": "Lorem Ipsum"
	}
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**POST /user` Add a new user**

body:

- (REQUIRED) `fullname` - User's full name
- (REQUIRED) `username` - User's identity name

request example:

```json
// POST /user

{
	"fullname": "Lorem Ipsum",
	"username": "test"
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**PATCH /user/:username` Update user**

params:

- (REQUIRED)  `username` - Specific username for searching

body:

- (OPTIONAL) `fullname` - User's full name
- (OPTIONAL) `username` - User's identity name

request example:

```json
// PATCH /user/test

{
	"fullname": "Lorem I. Amor"
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**DELETE /user/:username` Delete a user**

params:

- (REQUIRED)  `username` - Specific username for searching

request example:

```json
DELETE /user/test
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

---

## Machine endpoint

For create, read, update and delete vendor machine information.

### API

`**GET /machine` Get all machines**

success response:

```json
// status code: 200
{
	"status": "ok",
	"machine": [
		{
			"_id": // mongo document id,
			"address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			"postal_code": "11111",
			"vendor_code": "000000"
		}
		...
	]
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "ok",
	"machine": []
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**GET /machine/:vendor_code`  Get a machine**

params:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

request example:

```json
/machine/000000
```

success response:

```json
// status code: 200
{
	"status": "ok",
	"machine": {
		"_id": // mongo document id,
		"address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"postal_code": "11111",
		"vendor_code": "000000"
	}
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**POST /machine` Add a machine**

body:

- (REQUIRED) `address` - Vendor machine's address
- (REQUIRED) `postal_code` - Vendor machine's postal code

request example:

```json
// POST /machine

{
	"address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"postal_code": "11111"
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**PATCH /machine/:vendor_code` Update a machine information**

params:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

body:

- (OPTIONAL) `address` - Vendor machine's address
- (OPTIONAL) `postal_code` - Vendor machine's postal code

request example:

```json
// PATCH /machine/111111

{
	"postal_code": "12345"
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**DELETE /machine/:vendor_code` Delete a machine**

params:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

request example:

```json
DELETE /machine/111111
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

---

## Product endpoint

For create, read, update and delete products in the specific vendor machine.

### API

`**GET /product` Get products as a list**

query string:

- `vendor_id` - Vendor machine's code

request example:

```json
GET /product?vendor_id=111111
```

success response:

```json
// status code: 200
{
	"status": "ok",
	"products": [
		{
			"_id": // mongo document id,
			"name": "cola",
			"quantity": 14,
			"photo": // base64 string
		}
		...
	]
}
```

error response:

```json
// status code: 404 (vendor machine not found)
{
	"status": "not found"
}

// status code: 404 (data not found)
{
	"status": "ok",
	"products": []
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**PATCH /product/:product_id`  Purchase an item**

query string:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

params:

- (REQUIRED) `product_id` - Product id

request example:

```json
/product/11325?vendor_id=111111
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**POST /product` Add a product**

query string:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

body:

- (REQUIRED) `name` - Product name
- (REQUIRED) `quantity` - Product quantity
- (OPTIONAL) `photo` - Product photo

request example:

```json
// POST /product?vendor_id=111111

{
	"name": "cola",
	"quantity": 14
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**PUT /product/:product_id` Update a product information**

query string:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

params:

- (REQUIRED) `product_id` - Product id

body:

- (REQUIRED) `name` - Product name
- (REQUIRED) `quantity` - Product quantity
- (OPTIONAL) `photo` - Product photo

request example:

```json
// /product/11325?vendor_id=111111

{
	"name": "cola",
	"quantity": 15
}
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```

`**DELETE /product/:product_id` Delete a product**

query string:

- (REQUIRED)  `vendor_code` - Specific vendor machine code for searching

params:

- (REQUIRED) `product_id` - Product id

request example:

```json
/product/123456
```

success response:

```json
// status code: 200
{
	"status": "ok"
}
```

error response:

```json
// status code: 404 (data not found)
{
	"status": "not found"
}

// status code: 500 (internal server error)
{
	"status": "not ok"
}
```
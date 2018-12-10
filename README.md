# DB設計
## Proposals table

| Column   | Type     | Options  |
| -------- | -------- | -------- |
| detail   | Text     |          |
| end_time | Datetime | null:false |
| place_id | integer  | null:false, foreign_key: true|

### Association
has_one :place 
belongs_to :user


## Places table

| Column   | Type     | Options  |
| -------- | -------- | -------- |
| name     | String   |          |
| place_url | Text    | null:false |
| image_url | Text    |          |
| position | position | null:false |

### Associaltion
has_one :proposal

## users table
| Column   | Type     | Options  |
| -------- | -------- | -------- |
| nickname  | string   | null:false |
| name  | string   | unique:true, null: false |
| gender | string |          | detail | text   |      | 

### Associaltion
has_many :proposals

## rooms table
| Column   | Type     | Options  |
| -------- | -------- | -------- |

### Associaltion
has_many :users, through: :rooms_users
has_many :messages
has_many :rooms_users

## rooms_users table
| Column   | Type     | Options  |
| -------- | -------- | -------- |
| user_id  | integer  | null:false, foreign_key: true|
| room_id  | integer  | null:false, foreign_key: true|

### Associaltion
belongs_to :user
belongs_to :room

## messages table
| Column   | Type     | Options  |
| -------- | -------- | -------- |
| body     | text     | |
| image    | string   | |
| user_id  | integer  | null:false, foreign_key: true|
| room_id  | integer  | null:false, foreign_key: true|

### Associaltion
belongs_to :user
belongs_to :room


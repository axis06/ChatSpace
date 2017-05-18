#EXPERTカリキュラム
[カリキュラム] (http://master.tech-camp.in/users/courses/28)

## 開発環境
* Ruby 2.3.1　　
* Rails 5.0.0.1　　
* Bundler version 1.13.5　　

## データベース設計  

### Users　　

| column        | type           | null  |
| ------------- |:---------------| :-----|
| id            | integer        | false |
| email | string | false | 
| name | string | false | | 
| encrypted_password | string |  | 
| remember_created_at | integer |  | 
| sign_in_count | integer |  | 
| current_sign_in_at | integer |  | 
| last_sign_in_at | datetime |  | 
| current_sign_in_ip | string |  | 
| last_sign_in_p  | string |   | 
| created_at | datetime | false | 
| updated_at | datetime | false | 



##### index:
* email

##### association
* has_many :groups, through: :groupusers

### Groups  

| column        | type           | null  |
| ------------- |:---------------| :-----|
| id| integer  | false |
| name | string | false |
| created_at | datetime | false |
| updated_at | datetime | false |


##### index


##### association
* has_many :users, through: :groupusers
* has_many :messages

### GroupUsers

| column        | type           | null  |
| ------------- |:---------------| :-----|
| id| integer  | false |
| user_id | integer | false |
| group_id | integer | false |
| created_at | datetime | false |
| updated_at | datetime | false |

##### index
* user_id
* group_id

##### association
* belongs_to :user
* belongs_to :group

### Messages  
| column        | type           | null  |
| ------------- |:---------------| :-----|
| id| integer  | false |
| body | text |  |
| image | string |  |
| user_id | integer | false |
| group_id | integer | false |
| created_at | datetime | false |
| updated_at | datetime | false |

##### index
* user_id
* group_id

##### association
* belongs_to :user
* belongs_to :group

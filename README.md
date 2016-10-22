#EXPERTカリキュラム
[カリキュラム] (https://tech-camp.in/)

## 開発環境　　
Ruby 2.3.1　　
Rails 5.0.0.1　　
Bundler version 1.13.5　　
　　　　
## データベース設計  

Users　　
```
  id  
  email  
  name  
  encrypted_password  
  reset_password_token  
  remember_created_at  
  sign_in_count	integer  
  current_sign_in_at  
  last_sign_in_at	datetime  
  current_sign_in_ip  
  last_sign_in_ip  
  created_at  
  updated_at  
  
  index [email]  
```
Groups  
```
  id  
  name  
  created_at  
  updated_at  
```

GuropsUsers  
```
  id  
  user_id  
  group_id  
  created_at  
  updated_at  
  
  index [user_id,group_id]  
```
Messages  
```
  id  
  body  
  image  
  user_id  
  group_id  
  created_at  
  updated_at  
  
  index [group_id]  
```

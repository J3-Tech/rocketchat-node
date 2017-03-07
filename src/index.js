import { Client } from './client'
import { Authentication } from './authentication'
import { Users } from './users'
import { Channels } from './channels'
import { Groups } from './groups'
import { IM } from './im'
import { Chat } from './chat'
import { Settings } from './settings'
import { Integrations } from './integrations'

var RocketChat = {};
RocketChat.Client = Client;
RocketChat.Authentication = Authentication;
RocketChat.Users = Users;
RocketChat.Channels = Channels;
RocketChat.Groups = Groups;
RocketChat.IM = IM;
RocketChat.Chat = Chat;
RocketChat.Settings = Settings;
RocketChat.Integrations = Integrations;

exports.RocketChat = RocketChat;
